#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmMaterialAttributeEvent {
    char vTable1724[0x8];
    float32 m_flStartTimeSeconds;
    float32 m_flDurationSeconds;
    CGlobalSymbol m_syncID;
    bool m_bClientOnly;
    char end_pad_1725[0x7];
    CUtlString m_attributeName;
    CUtlStringToken m_attributeNameToken;
    char pad_1755[0x4];
    CPiecewiseCurve m_x;
    CPiecewiseCurve m_y;
    CPiecewiseCurve m_z;
    CPiecewiseCurve m_w;
};
