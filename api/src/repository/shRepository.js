import { con } from './conection.js'

export async function novoSuperHeroi(heroi){
    const comando =
    `
    insert into tb_super_heroi ( nm_super_heroi, ds_super_poder, bt_voa )
					values ( ?, ?, ? );
    `
    const [ resposta ] = await con.query(comando, [heroi.nome, heroi.poder, heroi.voa]);
    heroi.id = resposta.insertId
    return heroi;
}

export async function procurarHeroiid(id){
    const comando = 
    `
    select * 
    from tb_super_heroi
    where id_super_heroi = '?'
    `
    const  [ resposta ]   = await con.query(comando, id);

    return resposta;
}

export async function procurarHeroinome(nome){
    const comando = 
    `
    select * 
    from tb_super_heroi
    where id_super_heroi like '?'
    `
    const  [ resposta ]   = await con.query(comando, nome);

    return resposta;
}

