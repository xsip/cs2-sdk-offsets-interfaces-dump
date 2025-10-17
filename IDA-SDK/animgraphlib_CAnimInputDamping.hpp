#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CAnimInputDamping {
    char vTable34[0x8];
    animgraphlib_DampingSpeedFunction m_speedFunction;
    float32 m_fSpeedScale;
    float32 m_fFallingSpeedScale;
    char end_pad_35[0x4];
};
