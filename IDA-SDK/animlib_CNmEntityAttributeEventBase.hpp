#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmEntityAttributeEventBase {
    char vTable1724[0x8];
    float32 m_flStartTimeSeconds;
    float32 m_flDurationSeconds;
    CGlobalSymbol m_syncID;
    bool m_bClientOnly;
    char end_pad_1725[0x7];
    CUtlString m_attributeName;
    char end_pad_1742[0x10];
};
