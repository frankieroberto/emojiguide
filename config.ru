
require 'sprockets'

sproket_environment = Sprockets::Environment.new
sproket_environment.append_path 'app/assets/stylesheets'
sproket_environment.css_compressor = :scss

map '/assets' do 
  run sproket_environment
end

use Rack::Static,
  :urls => ["/images", "/js", "/css", '/'],
  :root => "public",
  :index => 'index.html',
  :header_rules => [[:all, {'Cache-Control' => 'public, max-age=1'}]]

headers = {'Content-Type' => 'text/html', 'Content-Length' => '9'}
run lambda { |env| [404, headers, ['Not Found']] }