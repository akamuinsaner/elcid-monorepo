import { Button, Dropdown, Menu, MenuItem } from '@elcid-monorepo/widgets';
import { State } from './store';
import { RiArrowDownSLine, RiFilterLine } from '@remixicon/react';
import { TECommerce } from '@elcid-monorepo/types';

const Header = ({
    sortBy,
    filterDrawerOpen,
    updateSortBy,
    updateFilterDrawerOpen,
}: {
    sortBy: State['sortBy'];
    filterDrawerOpen: State['filterDrawerOpen'];
    updateSortBy: (sortBy: TECommerce.ESortBy) => void;
    updateFilterDrawerOpen: (open: boolean) => void;
}) => {
    return (
        <div className='flex pb-8'>
            <Button
                name='filter'
                variant='secondary'
                prefix={<RiFilterLine />}
                onClick={() => updateFilterDrawerOpen(true)}
                className='desktop:hidden'
                aria-label='filter'
                aria-controls='filter'
                aria-expanded={filterDrawerOpen}
            >
                Filter
            </Button>
            <Dropdown
                className='w-52'
                menu={
                    <Menu>
                        {[
                            TECommerce.ESortBy['Newest'],
                            TECommerce.ESortBy['Best rating'],
                            TECommerce.ESortBy['Most popular'],
                            TECommerce.ESortBy['Price: Low to high'],
                            TECommerce.ESortBy['Price: High to low'],
                        ].map(value => {
                            return (
                                <MenuItem
                                    key={value}
                                    aria-label={TECommerce.ESortBy[value]}
                                    selected={sortBy === value}
                                    onClick={() => updateSortBy(value)}
                                >
                                    {TECommerce.ESortBy[value]}
                                </MenuItem>
                            );
                        })}
                    </Menu>
                }
                placement='bottom-end'
                id='sortBy'
            >
                <Button
                    name='sortBy'
                    variant='secondary'
                    suffix={<RiArrowDownSLine />}
                    className='ml-auto'
                    aria-controls='sortBy'
                    aria-haspopup='menu'
                    aria-label='sortBy'
                >
                    Sort by
                </Button>
            </Dropdown>
        </div>
    );
};

export default Header;
