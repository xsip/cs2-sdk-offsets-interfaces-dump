#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animlib_NmPercent_t.hpp"
#include "animlib_NmPercent_t.hpp"

class animlib_CNmMaterialAttributeEvent {
    void **__vftable_0;
    animlib_NmPercent_t m_flStartTime;
    animlib_NmPercent_t m_flDuration;
    CGlobalSymbol m_syncID;
    bool m_bClientOnly;
    char end_pad_2497[0x7];
    CUtlString m_attributeName;
    CUtlStringToken m_attributeNameToken;
    char pad_2530[0x4];
    CPiecewiseCurve m_x;
    CPiecewiseCurve m_y;
    CPiecewiseCurve m_z;
    CPiecewiseCurve m_w;
};
