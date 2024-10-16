const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 4567;

app.listen(4567, () => {
    console.log('Server is running on port ' + PORT);
})

////////////////////////////////////////////////////////////////////////////////////////////////////
// CLIENTES
////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/clientes/:chave', async (req, res) => {
    const { chave } = req.params;
    try {
        const clientes = await prisma.clientes.findMany({
            where: {
                chave: chave
            }
        });
        res.status(200).json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao buscar clientes' });
    }
})

app.get('/clientes/:chave/:id', async (req, res) => {
    const { chave } = req.params;
    try {
        const clientes = await prisma.clientes.findMany({
            where: {
                chave: chave,
                id: parseInt(req.params.id)
            }
        });
        res.status(200).json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao buscar clientes' });
    }
})

app.post('/clientes', async (req, res) => {
    const { chave, razaoSocial, nomeFantasia, contato, cpf, cnpj, endereco, numero, bairro, cidade, estado, cep, inscMunicipal, atividade, email, fone } = req.body;    
    try {
        const cliente = await prisma.clientes.create({
            data: {
                chave: chave,
                razaoSocial: razaoSocial,
                nomeFantasia: nomeFantasia,
                contato: contato,
                cpf: cpf,
                cnpj: cnpj,
                endereco: endereco,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                cep: cep,
                inscMunicipal: inscMunicipal,
                atividade: atividade,
                email: email,
                fone: fone
            }
        });
        res.status(200).json(cliente);
    } catch (error) {
        console.log(error); 
        res.status(500).json({ message: 'Erro ao criar cliente' });
    }
 })

 app.put('/clientes/:id', async (req, res) => {
    const { id } = req.params;  
    try {
        const cliente = await prisma.clientes.update({
            where: {
                id: parseInt(id) 
            },
            data: {
                chave: req.body.chave,
                razaoSocial: req.body.razaoSocial,
                nomeFantasia: req.body.nomeFantasia,
                contato: req.body.contato,
                cpf: req.body.cpf,
                cnpj: req.body.cnpj,
                endereco: req.body.endereco,
                numero: req.body.numero, 
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                estado: req.body.estado,
                cep: req.body.cep,
                inscMunicipal: req.body.inscMunicipal,
                atividade: req.body.atividade,
                email: req.body.email,
                fone: req.body.fone
            }
        });
        res.status(200).json(cliente);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao atualizar cliente' });
    }
})

app.delete('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await prisma.clientes.delete({
            where: { 
                id: parseInt(id)
            }
        });
        res.status(200).json(cliente);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao excluir cliente' });
    }
})

////////////////////////////////////////////////////////////////////////////////////////////////////
// CORRETORES
////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/corretores/:chave', async (req, res) => {
    const { chave } = req.params;
    try {
        const corretores = await prisma.corretores.findMany({
            where: {
                chave: chave
            } 
        });
        res.status(200).json(corretores);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao buscar corretores' });
    }
})

app.post('/corretores', async (req, res) => {
    const { chave, nome, endereco, email, fone, dataAdmissao } = req.body;
    try {
        const corretor = await prisma.corretores.create({
            data: {
                chave: chave, 
                nome: nome,
                endereco: endereco,
                email: email,
                fone: fone,
                dataAdmissao: dataAdmissao ? new Date(dataAdmissao) : null,
            }
        });
        res.status(200).json(corretor);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao criar corretor' });
    }
})

app.put('/corretores/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const corretor = await prisma.corretores.update({
            where: {
                id: parseInt(id)
            },
            data: {
                chave: req.body.chave,
                nome: req.body.nome,
                endereco: req.body.endereco,
                email: req.body.email,
                fone: req.body.fone,
                dataAdmissao: req.body.dataAdmissao ? new Date(req.body.dataAdmissao) : null,
            }
        });
        res.status(200).json(corretor);
    }catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao atualizar corretor' });
    }   
})

app.delete('/corretores/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const corretor = await prisma.corretores.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.status(200).json(corretor);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao excluir corretor' });
    }
})

////////////////////////////////////////////////////////////////////////////////////////////////////
// FORMA DE PAGAMENTO
////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/formaPagamento/:chave', async (req, res) => {
    const { chave } = req.params;
    try {
        const formaPagamento = await prisma.formaPagamento.findMany({
            where: {
                chave: chave
            },
            orderBy: {
                id: 'asc'
            }
        });
        res.status(200).json(formaPagamento);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao buscar forma de pagamento' });
    }
})

app.post('/formaPagamento', async (req, res) => {
    const { chave, metodo } = req.body;
    try {
        const formaPagamento = await prisma.formaPagamento.create({
            data: {
                chave: chave,
                formaPagamento: metodo
            }
        });
        res.status(200).json(formaPagamento);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao criar forma de pagamento' });
    }
})

app.put('/formaPagamento/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const formaPagamento = await prisma.formaPagamento.update({
            where: {
                id: parseInt(id)
            },
            data: {
                chave: req.body.chave,
                formaPagamento: req.body.metodo
            }
        });
        res.status(200).json(formaPagamento);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao atualizar forma de pagamento' });
    }
})

app.delete('/formaPagamento/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const formaPagamento = await prisma.formaPagamento.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.status(200).json(formaPagamento);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao excluir forma de pagamento' });
    }
})

////////////////////////////////////////////////////////////////////////////////////////////////////
// PROGRAMAÇÃO
////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/programacao/:chave', async (req, res) => {
    const { chave } = req.params;
    try {
        const programacao = await prisma.programacao.findMany({
            where: {
                chave: chave
            },
            orderBy: {
                programa: 'asc'
            }
        });
        res.status(200).json(programacao);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao buscar programação' });
    }
})

app.post('/programacao', async (req, res) => {
    const { chave, programa, horaInicio, horaFim, apresentador, diasApresentacao, valorPatrocinio, estilo } = req.body;
    try {
        const programacao = await prisma.programacao.create({
            data: {
                chave: chave,
                programa: programa,
                horaInicio: horaInicio,
                horaFim: horaFim,
                apresentador: apresentador,
                diasApresentacao: diasApresentacao,
                valorPatrocinio: parseFloat(valorPatrocinio),
                estilo: estilo
            }
        });
        res.status(200).json(programacao);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao criar programação' });
    }})

    app.put('/programacao/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const programacao = await prisma.programacao.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    chave: req.body.chave,
                    programa: req.body.programa,
                    horaInicio: req.body.horaInicio,
                    horaFim: req.body.horaFim,
                    apresentador: req.body.apresentador,
                    diasApresentacao: req.body.diasApresentacao,
                    valorPatrocinio: parseFloat(req.body.valorPatrocinio),
                    estilo: req.body.estilo
                }
            });
            res.status(200).json(programacao);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro ao atualizar programação' });
        }
    })

    app.delete('/programacao/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const programacao = await prisma.programacao.delete({
                where: {
                    id: parseInt(id)
                }
            });
            res.status(200).json(programacao);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro ao excluir programação' });
        }
    })

////////////////////////////////////////////////////////////////////////////////////////////////////
// CONTRATOS
////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/contratos/:chave', async (req, res) => {
    const { chave } = req.params;
    try {
        const contratos = await prisma.contratos.findMany({ 
            where: {
                chave: chave
            },
            orderBy: {
                id: 'asc'
            }
        }); 
        res.status(200).json(contratos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao buscar contratos' });
    }
})

app.get('/contratos/:chave/:id', async (req, res) => {
    const { chave } = req.params;
    try {
        const contratos = await prisma.contratos.findMany({ 
            where: {
                chave: chave,
                id: parseInt(req.params.id)
            },
            orderBy: {
                id: 'asc',
            }
        }); 
        res.status(200).json(contratos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao buscar contratos' });
    }
})

app.post('/contratos', async (req, res) => {
    const { chave, id_cliente, dataEmissao, id_programa, numInsercoes, valor, id_corretor, comissao, diaVencimento, dataVencimento, id_formaPagamento, status, descritivo } = req.body;
    try {
        const contrato = await prisma.contratos.create({
            data: {
                chave: chave,
                id_cliente: parseInt(id_cliente),
                dataEmissao: new Date(dataEmissao),
                dataVencimento: new Date(dataVencimento),
                id_programa: parseInt(id_programa),
                numInsercoes: parseInt(numInsercoes),
                valor: parseFloat(valor),
                id_corretor: parseInt(id_corretor),
                comissao: parseFloat(comissao),
                diaVencimento: parseInt(diaVencimento),
                id_formaPagamento: parseInt(id_formaPagamento),
                status: status,
                descritivo: descritivo
            }
        });
        res.status(200).json(contrato);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao criar contrato' });
    }
})

app.put('/contratos/:id', async (req, res) => {
    const { id } = req.params;
    const { chave, id_cliente, dataEmissao, id_programa, numInsercoes, valor, id_corretor, comissao, dataVencimento, diaVencimento, id_formaPagamento, status, descritivo } = req.body;
    try {
        const contrato = await prisma.contratos.update({
            where: {
                id: parseInt(id)
            },
            data: {
                chave: chave,
                id_cliente: parseInt(id_cliente),
                dataEmissao: new Date(dataEmissao),
                dataVencimento: new Date(dataVencimento),
                id_programa: parseInt(id_programa),
                numInsercoes: parseInt(numInsercoes),
                valor: parseFloat(valor),
                id_corretor: parseInt(id_corretor),
                comissao: parseFloat(comissao),
                diaVencimento: parseInt(diaVencimento),
                id_formaPagamento: parseInt(id_formaPagamento),
                status: status,
                descritivo: descritivo
            }
        });
        res.status(200).json(contrato);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao atualizar contrato' });
    }
})

app.put('/contratos/cancelar/:contratoId', async (req, res) => {
    const { contratoId } = req.params;
    try {
        const contrato = await prisma.contratos.update({
            where: {
                id: parseInt(contratoId)
            },
            data: {
                status: 'Cancelado'
            }
        });
        res.status(200).json(contrato);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao cancelar contrato' });
    }
})

app.delete('/contratos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const contrato = await prisma.contratos.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.status(200).json(contrato);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao excluir contrato' });
    }
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FATURAMENTO
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/faturamento/:chave', async (req, res) => {
    const { chave } = req.params;
    try {
        const faturamento = await prisma.faturamento.findMany({
            where: {
                chave: chave
            },
            orderBy: [
                { id_cliente: 'asc' },
                { dataVencimento: 'asc' }
            ]
        });
        res.status(200).json(faturamento);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao buscar faturamento' });
    }
})

app.get('/faturamento/:chave/:idContrato', async (req, res) => {
    const { chave } = req.params;
    try {
        const faturamento = await prisma.faturamento.findMany({
            where: {
                chave: chave,
                id_contrato: parseInt(req.params.idContrato)
            },
            orderBy: {
                id_cliente: 'asc'
            }
        });
        res.status(200).json(faturamento);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao buscar faturamento' });
    }
})


app.post('/faturamento', async (req, res) => {
    const { chave, id_cliente, id_contrato, id_programa, dataEmissao, dataVencimento, dataPagamento, valor, id_formaPagamento, descritivo } = req.body;
    try {
        const faturamento = await prisma.faturamento.create({
            data: {
                chave: chave,
                id_cliente: parseInt(id_cliente),
                id_contrato: parseInt(id_contrato),
                id_programa: parseInt(id_programa),
                dataEmissao: new Date(dataEmissao),
                dataVencimento: new Date(dataVencimento),
                dataPagamento: dataPagamento ? new Date(dataPagamento) : null,
                valor: parseFloat(valor),
                id_formaPagamento: parseInt(id_formaPagamento),
                descritivo: descritivo
            }
        });
        res.status(200).json(faturamento);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao criar faturamento' });
    }
})

app.put('/faturamento/:id', async (req, res) => {
    const { id } = req.params;
    const { chave, id_cliente, id_contrato, id_programa, dataEmissao, dataVencimento, dataPagamento, valor, id_formaPagamento, descritivo } = req.body;
    try {
        const faturamento = await prisma.faturamento.update({
            where: {
                id: parseInt(id)
            },
            data: {
                chave: chave,
                id_cliente: parseInt(id_cliente),
                id_contrato: parseInt(id_contrato),
                id_programa: parseInt(id_programa),
                dataEmissao: new Date(dataEmissao),
                dataVencimento: new Date(dataVencimento),
                dataPagamento: new Date(dataPagamento),
                valor: parseFloat(valor),
                id_formaPagamento: parseInt(id_formaPagamento),
                descritivo: descritivo
            }
        });
        res.status(200).json(faturamento);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao atualizar faturamento' });
    }
})

app.put('/faturamento/:id/pagamento', async (req, res) => {
    const { id } = req.params;
    const { dataPagamento, id_formaPagamento } = req.body;
    try {
        const faturamento = await prisma.faturamento.update({
            where: {
                id: parseInt(id)
            },
            data: {
                dataPagamento: new Date(dataPagamento),     
                id_formaPagamento: parseInt(id_formaPagamento)
            }
        });
        res.status(200).json(faturamento);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao atualizar faturamento' });
    }
})

app.delete('/faturamento/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const faturamento = await prisma.faturamento.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.status(200).json(faturamento);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao excluir faturamento' });
    }
})