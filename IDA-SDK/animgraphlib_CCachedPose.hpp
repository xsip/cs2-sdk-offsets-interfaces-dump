#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animationsystem_HSequence.hpp"

class animgraphlib_CCachedPose {
    char vTable92[0x8];
    char m_transforms[0x18];
    char m_morphWeights[0x18];
    animationsystem_HSequence m_hSequence;
    float32 m_flCycle;
};
