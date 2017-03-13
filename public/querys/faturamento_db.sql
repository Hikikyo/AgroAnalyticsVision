#---------------------------------------------------------------
#---------------------------------------------------------------
#//----O intuito deste script eh gerar todas as tabelas e 
#--constraints do banco de dados do Módulo faturamento do
#--projeto EMPREITADA
#---------------------------------------------------------------
#---------------------------------------------------------------


#--Ainda falta testar.

USE heroku_5861d0673438130;

#start transaction
#	begin
#---------------------------------------------------------------
#---------------------------------------------------------------

#--Enderecos e cliente, ate produto.

#--#1 - 
DROP TABLE IF EXISTS fatura;
CREATE TABLE fatura (
	codigo_fatura int primary key NOT NULL UNIQUE AUTO_INCREMENT,
	codigo_lote int NOT NULL,
	codigo_contrato int NOT NULL,
	codigo_regra_fat int NOT NULL,
	data_inicio datetime NOT NULL,
	data_vencimento datetime NOT NULL,
	valor_bruto_fatura decimal(10,2) NOT NULL,
	valor_liquido_fatura decimal(10,2) NOT NULL
);

#--#2 - 
DROP TABLE IF EXISTS lote_fatura;
CREATE TABLE lote_fatura (
	codigo_lote int primary key NOT NULL UNIQUE AUTO_INCREMENT,
	codigo_cliente int NOT NULL,
	data_inicio datetime NOT NULL,
	data_final datetime NOT NULL,
	valor_bruto_lote decimal(10,2) NOT NULL,
	valor_liquido_lote decimal(10,2) NOT NULL
);

#--#3 - 
DROP TABLE IF EXISTS regra_faturamento;
CREATE TABLE regra_faturamento (
	codigo_regra_fat int primary key NOT NULL UNIQUE AUTO_INCREMENT,
	codigo_servico int NOT NULL
);

#--#4 - 
DROP TABLE IF EXISTS imposto;
CREATE TABLE imposto (
	codigo_imposto int primary key NOT NULL UNIQUE AUTO_INCREMENT,
	nome_imposto varchar(32) NOT NULL,
	taxa_imposto decimal(4,4) NOT NULL
);

#--#4 - 
DROP TABLE IF EXISTS regra_imposto;
CREATE TABLE regra_imposto (
	codigo_imposto int NOT NULL,
	codigo_regra_fat int NOT NULL
);


#---------------------------------------------------------------
#---------------------------------------------------------------

#--Adding Foreign Keys

ALTER TABLE fatura
ADD FOREIGN KEY (codigo_lote) REFERENCES lote_fatura(codigo_lote),
ADD FOREIGN KEY (codigo_regra_fat) REFERENCES regra_faturamento(codigo_regra_fat);

ALTER TABLE regra_imposto
ADD FOREIGN KEY (codigo_imposto) REFERENCES imposto(codigo_imposto),
ADD FOREIGN KEY (codigo_regra_fat) REFERENCES regra_faturamento(codigo_regra_fat);

#commit;