const store = require('store');
const serviceModel = require('../model/services');
const extraModel = require('../model/extra');



exports.services = async (req, res, next) => {
    
    const username = store.get('data');
    const query = await serviceModel.getAllServices();
    const queryPrice = await extraModel.getAllPrice();
    const queryPercentage = await extraModel.getAllPercentage();

    // return res.status(200).json(query);
    console.log(req.userId)
    res.status(200).render(
        'admin/services', {
        messageSuccess: req.flash('success'),
        messageError:'',
        data: query,
        dataPrice: queryPrice,
        dataPercentage: queryPercentage,
        title: 'admin.Serviços',
        path: '/services',
        titleBanner: 'Serviços',
        paragraphBanner: 'O melhor para si e para o seu negócio, juntos somos a prosperidade',
        userId_loged: req.userId,
        userAccountName: username
    })
};

exports.getServiceById = async (req, res, next) => {

    const { id_service } = req.params;
    const queryPrice = await extraModel.getAllPrice();
    const queryPercentage = await extraModel.getAllPercentage();
    await serviceModel.getServiceById(id_service)
        .then(service => {
            // res.status(200).json(service);
            res.status(200).render('admin/editing-service', {
                messageSuccess: '',
                messageError: '',
                data: service,
                dataPrice: queryPrice,
                dataPercentage: queryPercentage,
                title: 'eiditng',
                path: '/services',
                titleBanner: '',
                paragraphBanner: '',
                userAccountName: store.get('data')
            })
        }).catch(err => {
            res.status(500).json(err);
        })

    // res.status(200).json(query);
}

exports.createService = async (req, res, next) => {

    try {
        const id_fk_price = req.body.id_fk_price;
        const id_fk_perc_serv = req.body.id_fk_perc_serv;
        const title = req.body.title;
        const description = req.body.description;

        const query = serviceModel.postService(id_fk_price, id_fk_perc_serv, title, description);

        if (req.body) {
            req.flash('success', 'Serviço resgistado com sucesso. Obrigado!')
            res.redirect('/admin/services');
        }

        // console.log("Serviço carregado com sucesso: ", req.body);
    } catch (err) {
        res.status(500).json({ message: 'service not save' });
    }
}

exports.updateService = async (req, res, next) => {

    const id_service = req.params.id_service;

    const id_fk_price = req.body.id_fk_price;
    const id_fk_perc_serv = req.body.id_fk_perc_serv;
    const title = req.body.title;
    const description = req.body.description;

    try {
        const query = await serviceModel.updateService(id_fk_price, id_fk_perc_serv, title, description, id_service);
        req.flash('success', 'Serviço actualizado com sucesso. Obrigado!')
        res.redirect('/admin/services');
    } catch (err) {
        res.status(500).json({ message: 'usuário não actualizado!' })
    }
}

exports.deleteService = (req, res, next) => {

    const id_service = req.params.id_service;
    serviceModel.deleteService(id_service)
        .then(service => {
            res.status(200).redirect('/admin/services');
        }).catch(err => {
            res.status(500).json({ message: 'serviço não encontrado' });
        })
}