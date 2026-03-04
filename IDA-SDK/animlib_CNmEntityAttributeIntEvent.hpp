#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animlib_NmPercent_t.hpp"
#include "animlib_NmPercent_t.hpp"

class animlib_CNmEntityAttributeIntEvent {
    void **__vftable_0;
    animlib_NmPercent_t m_flStartTime;
    animlib_NmPercent_t m_flDuration;
    CGlobalSymbol m_syncID;
    bool m_bClientOnly;
    char end_pad_2498[0x7];
    CUtlString m_attributeName;
    char end_pad_2514[0x10];
    int32_t m_nIntValue;
    char end_pad_2515[0x4];
};
