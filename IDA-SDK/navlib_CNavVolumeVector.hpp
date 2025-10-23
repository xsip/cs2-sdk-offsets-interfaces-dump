#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class navlib_CNavVolumeVector {
    char pad_2752[0x78];
    char vTable4175[0x8];
    bool m_bHasBeenPreFiltered;
    char end_pad_4176[0x1f];
};
