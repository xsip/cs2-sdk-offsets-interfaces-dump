#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmEntityAttributeFloatEvent {
    char vTable1723[0x8];
    float32 m_flStartTimeSeconds;
    float32 m_flDurationSeconds;
    CGlobalSymbol m_syncID;
    bool m_bClientOnly;
    char end_pad_1724[0x7];
    CUtlString m_attributeName;
    char end_pad_1741[0x10];
    CPiecewiseCurve m_FloatValue;
};
