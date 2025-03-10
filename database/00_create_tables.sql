CREATE TABLE IF NOT EXISTS Motorista (
    CPF VARCHAR(11) PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Vencimento_CNH DATE NOT NULL,
    CNH VARCHAR(11) NOT NULL,
    placa_veiculo VARCHAR(7),
    UNIQUE (CPF, CNH)
);

CREATE TABLE IF NOT EXISTS Veiculo (
    Placa VARCHAR(7) PRIMARY KEY UNIQUE,
    Marca VARCHAR(100) NOT NULL,
    Modelo VARCHAR(100) NOT NULL,
    Ano DATE NOT NULL,
    Cor VARCHAR(100),
    id_multa INT,
    CPF_proprietario VARCHAR(11)
);

CREATE TABLE IF NOT EXISTS Multa (
    Id_multa INT PRIMARY KEY UNIQUE,
    Valor FLOAT NOT NULL,
    Data DATE NOT NULL,
    Vel_Maxima FLOAT,
    Tipo_Infracao ENUM('Velocidade acima da máxima permitida', 'Estacionar em local proibido', 'Dirigir utilizando o celular', 'Dirigir sob efeito de álcool', 'Não utilizar cinto de segurança', 'Avançar o sinal vermelho') NOT NULL,
    Pontos_Penalidade INT NOT NULL,
    id_veiculo INT
);
