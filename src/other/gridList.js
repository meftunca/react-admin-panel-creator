import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
const tileData = [
    {
        img: '/static/images/grid-list/breakfast.jpg',
        title: 'Breakfast',
        author: 'jill111',
        cols: 2,
        featured: true,
    },
    {
        img: '/static/images/grid-list/burgers.jpg',
        title: 'Tasty burger',
        author: 'director90',
    },
    {
        img: '/static/images/grid-list/camera.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: '/static/images/grid-list/morning.jpg',
        title: 'Morning',
        author: 'fancycrave1',
        featured: true,
    },
    {
        img: '/static/images/grid-list/hats.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: '/static/images/grid-list/honey.jpg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: '/static/images/grid-list/vegetables.jpg',
        title: 'Vegetables',
        author: 'jill111',
        cols: 2,
    },
    {
        img: '/static/images/grid-list/plant.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
    {
        img: '/static/images/grid-list/mushroom.jpg',
        title: 'Mushrooms',
        author: 'PublicDomainPictures',
    },
    {
        img: '/static/images/grid-list/olive.jpg',
        title: 'Olive oil',
        author: 'congerdesign',
    },
    {
        img: '/static/images/grid-list/star.jpg',
        title: 'Sea star',
        cols: 2,
        author: '821292',
    },
    {
        img: '/static/images/grid-list/bike.jpg',
        title: 'Bike',
        author: 'danfador',
    },
];

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
console.log(proccess.env)
function ImageGridList(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={"https://material-ui.com/"+tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
