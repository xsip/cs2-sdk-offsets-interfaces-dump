#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particles_CPathParameters {
    int32_t m_nStartControlPointNumber;
    int32_t m_nEndControlPointNumber;
    int32_t m_nBulgeControl;
    float32 m_flBulge;
    float32 m_flMidPoint;
    Vector m_vStartPointOffset;
    Vector m_vMidPointOffset;
    Vector m_vEndOffset;
    char pad_1850[0x8];
};
