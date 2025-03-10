#A consulta deve retornar uma lista de motoristas com todos os seus dados.
SELECT * FROM Motorista;

#A consulta deve retornar uma lista de veículos com todos os seus dados
SELECT * FROM Veiculo JOIN Motorista
    ON Veiculo.CPF_Proprietario = Motorista.CPF;

#A consulta deve retornar uma lista de multas com todos os seus dados.
SELECT * FROM Multa; 

# A consulta deve retornar a quantidade de pontos de penalidade de um motorista.
# Duas colunas devem ser retornadas: "motorista" e "pontos".
# Os motoristas que não tiverem 10 pontos ou mais não devem ser retornados na consulta.
SELECT Motorista.nome, Multa.Pontos_Penalidade FROM Motorista 
            JOIN Veiculo ON CPF_proprietario = CPF
            JOIN Multa ON Veiculo.id_multa = Multa.id_multa
            WHERE Pontos_penalidade >= 10;
            