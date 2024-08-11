Vagrant.configure("2") do |config|
  # Configura la caja base a usar
  config.vm.box = "ubuntu/bionic64"

  # Configura la red privada
  config.vm.network "private_network", type: "static", ip: "192.168.33.10"

  # Configura el nombre del host
  config.vm.hostname = "test-server"

  # Configuración adicional (opcional)
  # config.vm.provider "virtualbox" do |vb|
  #   vb.memory = "1024"
  # end
end

