import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Calculator, TrendingUp, DollarSign, Target, Info } from 'lucide-react';

interface CalculatorInputs {
  betAmount: string;
  odds: string;
  oddsFormat: 'american' | 'decimal' | 'fractional';
  confidence: number;
}

interface CalculatorResults {
  potentialWin: number;
  totalReturn: number;
  roi: number;
  breakEvenPercentage: number;
  impliedProbability: number;
}

const ROICalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    betAmount: '',
    odds: '',
    oddsFormat: 'american', // american, decimal, fractional
    confidence: 3
  });
  
  const [results, setResults] = useState<CalculatorResults>({
    potentialWin: 0,
    totalReturn: 0,
    roi: 0,
    breakEvenPercentage: 0,
    impliedProbability: 0
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const betAmount = parseFloat(inputs.betAmount) || 0;
    const odds = parseFloat(inputs.odds) || 0;
    
    if (betAmount <= 0 || odds === 0) {
      setResults({
        potentialWin: 0,
        totalReturn: 0,
        roi: 0,
        breakEvenPercentage: 0,
        impliedProbability: 0
      });
      return;
    }

    let decimalOdds = 1;
    let impliedProbability = 0;

    // Convert odds to decimal format
    switch (inputs.oddsFormat) {
      case 'american':
        if (odds > 0) {
          decimalOdds = (odds / 100) + 1;
          impliedProbability = 100 / (odds + 100);
        } else {
          decimalOdds = (100 / Math.abs(odds)) + 1;
          impliedProbability = Math.abs(odds) / (Math.abs(odds) + 100);
        }
        break;
      case 'decimal':
        decimalOdds = odds;
        impliedProbability = 1 / odds;
        break;
      case 'fractional':
        // Assuming odds input as decimal representation of fraction (e.g., 2.5 for 5/2)
        decimalOdds = odds + 1;
        impliedProbability = 1 / decimalOdds;
        break;
    }

    const potentialWin = betAmount * (decimalOdds - 1);
    const totalReturn = betAmount * decimalOdds;
    const roi = ((potentialWin / betAmount) * 100);
    const breakEvenPercentage = (1 / decimalOdds) * 100;

    setResults({
      potentialWin: potentialWin,
      totalReturn: totalReturn,
      roi: roi,
      breakEvenPercentage: breakEvenPercentage,
      impliedProbability: impliedProbability * 100
    });
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatPercentage = (percentage: number): string => {
    return `${percentage.toFixed(2)}%`;
  };

  const getConfidenceColor = (confidence: number): string => {
    if (confidence >= 4) return 'text-green-500';
    if (confidence >= 3) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getConfidenceText = (confidence: number): string => {
    switch (confidence) {
      case 5: return 'Very High';
      case 4: return 'High';
      case 3: return 'Medium';
      case 2: return 'Low';
      case 1: return 'Very Low';
      default: return 'Medium';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-8">
      <div className="flex items-center space-x-3 mb-6">
        <Calculator className="h-8 w-8 text-primary" />
        <h3 className="text-2xl font-display font-bold text-card-foreground">
          ROI Calculator
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-card-foreground mb-2">
              Bet Amount
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="number"
                value={inputs.betAmount}
                onChange={(e) => handleInputChange('betAmount', e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="1000"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-card-foreground mb-2">
              Odds Format
            </label>
            <select
              value={inputs.oddsFormat}
              onChange={(e) => handleInputChange('oddsFormat', e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="american">American (+150, -200)</option>
              <option value="decimal">Decimal (2.50, 1.50)</option>
              <option value="fractional">Fractional (3/2, 1/2)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-card-foreground mb-2">
              Odds
            </label>
            <input
              type="number"
              value={inputs.odds}
              onChange={(e) => handleInputChange('odds', e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder={inputs.oddsFormat === 'american' ? '+150' : '2.50'}
              step="0.01"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-card-foreground mb-2">
              Confidence Level
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min="1"
                max="5"
                value={inputs.confidence}
                onChange={(e) => handleInputChange('confidence', parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Very Low</span>
                <span className={`font-semibold ${getConfidenceColor(inputs.confidence)}`}>
                  {getConfidenceText(inputs.confidence)}
                </span>
                <span>Very High</span>
              </div>
            </div>
          </div>

          <Button
            onClick={() => setShowAdvanced(!showAdvanced)}
            variant="outline"
            className="w-full"
          >
            {showAdvanced ? 'Hide' : 'Show'} Advanced Analytics
          </Button>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <div className="bg-background border border-border rounded-lg p-6">
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 text-primary mr-2" />
              Calculation Results
            </h4>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Potential Win</span>
                <span className="font-bold text-green-500 text-lg">
                  {formatCurrency(results.potentialWin)}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Return</span>
                <span className="font-bold text-foreground text-lg">
                  {formatCurrency(results.totalReturn)}
                </span>
              </div>
              
              <div className="flex justify-between items-center border-t border-border pt-4">
                <span className="text-muted-foreground">ROI</span>
                <span className="font-bold text-primary text-xl">
                  {formatPercentage(results.roi)}
                </span>
              </div>
            </div>
          </div>

          {showAdvanced && (
            <div className="bg-background border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Target className="h-5 w-5 text-primary mr-2" />
                Advanced Analytics
              </h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Implied Probability</span>
                  <span className="font-semibold text-foreground">
                    {formatPercentage(results.impliedProbability)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Break-even %</span>
                  <span className="font-semibold text-foreground">
                    {formatPercentage(results.breakEvenPercentage)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Confidence</span>
                  <span className={`font-semibold ${getConfidenceColor(inputs.confidence)}`}>
                    {getConfidenceText(inputs.confidence)}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Info className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm text-primary font-semibold mb-1">
                  Professional Tip
                </p>
                <p className="text-sm text-muted-foreground">
                  Future Papa's analysis typically identifies futures with 15-25% higher ROI 
                  than market average through proprietary modeling and expert curation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;

