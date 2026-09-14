module Jekyll
  module SplitFilter
    def split_on(input, delimiter)
      input.split(delimiter)
    end
  end
end

Liquid::Template.register_filter(Jekyll::SplitFilter)