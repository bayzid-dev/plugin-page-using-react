import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const SaveButton = ({ onClick }) => {
    return (
        <Button
            variant="primary"
            onClick={onClick}
            __next40pxDefaultSize>
            {__('Save', 'announcement-bar')}
        </Button>
    )
}

export default SaveButton;