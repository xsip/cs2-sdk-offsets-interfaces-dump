#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CProductQuantizer {
    char m_subQuantizers[0x18];
    int32_t m_nDimensions;
    char end_pad_205[0x4];
};
