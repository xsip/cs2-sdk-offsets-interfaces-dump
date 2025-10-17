#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CMorphRectData {
    int16_t m_nXLeftDst;
    int16_t m_nYTopDst;
    float32 m_flUWidthSrc;
    float32 m_flVHeightSrc;
    char pad_350[0x4];
    char m_bundleDatas[0x18];
};
