#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CMorphSetData {
    char vTable351[0x10];
    int32_t m_nWidth;
    int32_t m_nHeight;
    char m_bundleTypes[0x18];
    char m_morphDatas[0x18];
    char m_pTextureAtlas[0x8];
    char m_FlexDesc[0x18];
    char m_FlexControllers[0x18];
    char m_FlexRules[0x18];
};
