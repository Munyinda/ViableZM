const router = require( 'express' ).Router();
const path = require( 'path' );

//Return the home page
router.get( '/', ( req, res) => {
    console.log( `dirname = ${ __dirname }` );
    //__dirname returns the current directory, therefore,
    //in order to back up a few levels from the current directory,
    //it is important to use path.join as in the fashion shown below
    res.status( 200 ).sendFile( 'investor_relations.html', { root: path.join( __dirname, '../../views/webpages' ) } );
} );

module.exports = router;