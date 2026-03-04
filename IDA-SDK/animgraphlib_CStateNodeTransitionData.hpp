#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CBlendCurve.hpp"

class animgraphlib_CStateNodeTransitionData {
    animgraphlib_CBlendCurve m_curve;
    char end_pad_237[0x14];
    void **__vftable_0;
    char m_blendDuration[0x8];
    char m_resetCycleValue[0x8];
    char end_pad_239[0x4];
};
