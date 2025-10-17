#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CMorphBundleData {
    float32 m_flULeftSrc;
    float32 m_flVTopSrc;
    char m_offsets[0x18];
    char m_ranges[0x18];
};
