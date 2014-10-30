class Wrestler
  attr_accessor :weight
  attr_accessor :name

  def self.newRand
    names = ['Trevor', 'Ryan', 'Alex', 'John', 'Nick', 'Jim', 'Devin']
    weights = getWeights()
    self.name = names[rand(names.length)]
    self.weight = weights[rand(weights.length)]
  end



  def self.getWeights
    return ['125', '133', '141', '149', '152', '165', '174', '184', '197', '285']
  end

  def to_s
    "#{name}: #{weight}"
  end
end
