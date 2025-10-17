#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CBlendCurve.hpp"

class animgraphlib_CStateNodeTransitionData {
    animgraphlib_CBlendCurve m_curve;
    char end_pad_226[0x14];
    char vTable227[0x8];
    char m_blendDuration[0x8];
    char m_resetCycleValue[0x8];
    char end_pad_228[0x4];
};
