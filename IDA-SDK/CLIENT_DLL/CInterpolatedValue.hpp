#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class CInterpolatedValue {
    float32 m_flStartTime;
    float32 m_flEndTime;
    float32 m_flStartValue;
    float32 m_flEndValue;
    int32_t m_nInterpType;
};
