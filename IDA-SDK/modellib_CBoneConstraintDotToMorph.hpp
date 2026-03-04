#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CBoneConstraintDotToMorph {
    char pad_310[0x20];
    CUtlString m_sBoneName;
    CUtlString m_sTargetBoneName;
    CUtlString m_sMorphChannelName;
    float32 m_flRemap[4];
    char end_pad_314[0x10];
};
