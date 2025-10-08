
import { __ } from '@wordpress/i18n';
import { FontSizePicker } from '@wordpress/components';

const SizeControl = ({ value, onChange }) => {
    return (
        <FontSizePicker
            fontSizes={[
                {
                    name: __('Small', 'announcement-bar'),
                    size: 'small',
                    slug: 'small',
                },
                {
                    name: __('Medium', 'announcement-bar'),
                    size: 'medium',
                    slug: 'medium',
                },
                {
                    name: __('Large', 'announcement-bar'),
                    size: 'large',
                    slug: 'large',
                },
                {
                    name: __('Extra Large', 'announcement-bar'),
                    size: 'x-large',
                    slug: 'x-large',
                },
            ]}
            value={value}
            onChange={onChange}
            disableCustomFontSizes={true}
            __nextHasNoMarginBottom
        />
    );
};
export default SizeControl;
