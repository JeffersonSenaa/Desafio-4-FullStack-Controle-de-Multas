-- CreateTable
CREATE TABLE `Motorista` (
    `CPF` VARCHAR(11) NOT NULL,
    `Nome` VARCHAR(100) NOT NULL,
    `Vencimento_CNH` DATETIME(3) NOT NULL,
    `CNH` VARCHAR(11) NOT NULL,
    `placa_veiculo` VARCHAR(7) NULL,

    UNIQUE INDEX `Motorista_CNH_key`(`CNH`),
    PRIMARY KEY (`CPF`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Veiculo` (
    `Placa` VARCHAR(7) NOT NULL,
    `Marca` VARCHAR(100) NOT NULL,
    `Modelo` VARCHAR(100) NOT NULL,
    `Ano` DATETIME(3) NOT NULL,
    `Cor` VARCHAR(100) NULL,
    `CPF_proprietario` VARCHAR(11) NOT NULL,

    UNIQUE INDEX `Veiculo_CPF_proprietario_key`(`CPF_proprietario`),
    PRIMARY KEY (`Placa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Multa` (
    `Id_multa` INTEGER NOT NULL AUTO_INCREMENT,
    `Valor` DOUBLE NOT NULL,
    `Data` DATETIME(3) NOT NULL,
    `Vel_Maxima` DOUBLE NULL,
    `Tipo_Infracao` VARCHAR(191) NOT NULL,
    `Pontos_Penalidade` INTEGER NOT NULL,
    `id_veiculo` VARCHAR(7) NOT NULL,

    PRIMARY KEY (`Id_multa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Veiculo` ADD CONSTRAINT `Veiculo_CPF_proprietario_fkey` FOREIGN KEY (`CPF_proprietario`) REFERENCES `Motorista`(`CPF`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Multa` ADD CONSTRAINT `Multa_id_veiculo_fkey` FOREIGN KEY (`id_veiculo`) REFERENCES `Veiculo`(`Placa`) ON DELETE RESTRICT ON UPDATE CASCADE;
