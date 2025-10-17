#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CVectorQuantizer {
    char m_centroidVectors[0x18];
    int32_t m_nCentroids;
    int32_t m_nDimensions;
};
