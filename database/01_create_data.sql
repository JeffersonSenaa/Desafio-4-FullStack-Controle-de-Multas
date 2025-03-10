INSERT INTO Motorista (CPF, Nome, Vencimento_CNH, CNH, placa_veiculo) VALUES
('12345678901', 'João Silva', '2025-05-15', '12345678901', 'ABC1234'),
('98765432109', 'Maria Oliveira', '2024-12-20', '98765432109', 'XYZ5678'),
('45678912345', 'Carlos Souza', '2023-10-10', '45678912345', 'DEF9876'),
('32165498732', 'Ana Costa', '2026-08-25', '32165498732', 'GHI6543'),
('65432198765', 'Pedro Rocha', '2025-03-30', '65432198765', 'JKL3210');

INSERT INTO Veiculo (Placa, Marca, Modelo, Ano, Cor, id_multa, CPF_proprietario) VALUES
('ABC1234', 'Toyota', 'Corolla', '2018-01-01', 'Prata', 1, '12345678901'),
('XYZ5678', 'Honda', 'Civic', '2019-05-01', 'Preto', 2, '98765432109'),
('DEF9876', 'Ford', 'Focus', '2017-03-01', 'Branco', 3, '45678912345'),
('GHI6543', 'Chevrolet', 'Onix', '2020-07-01', 'Vermelho', 4, '32165498732'),
('JKL3210', 'Volkswagen', 'Golf', '2016-09-01', 'Azul', 5, '65432198765');

INSERT INTO Multa (Id_multa, Valor, Data, Vel_Maxima, Tipo_Infracao, Pontos_Penalidade, id_veiculo) VALUES
(1, 195.23, '2023-01-15', 120.0, 'Velocidade acima da máxima permitida', 7, 1),
(2, 130.50, '2023-02-20', NULL, 'Estacionar em local proibido', 4, 2),
(3, 293.47, '2023-03-25', NULL, 'Dirigir utilizando o celular', 7, 3),
(4, 880.41, '2023-04-30', NULL, 'Dirigir sob efeito de álcool', 7, 4),
(5, 195.23, '2023-05-05', NULL, 'Não utilizar cinto de segurança', 5, 5);
