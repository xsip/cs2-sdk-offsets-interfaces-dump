#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CMotionDataSet {
    char m_groups[0x18];
    int32_t m_nDimensionCount;
    char pad_186[0x4];
};
