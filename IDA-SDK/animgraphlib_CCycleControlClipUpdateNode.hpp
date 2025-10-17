#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animationsystem_HSequence.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CCycleControlClipUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable98[0x8];
    char m_tags[0x18];
    char pad_99[0x4];
    animationsystem_HSequence m_hSequence;
    float32 m_duration;
    animgraphlib_AnimValueSource m_valueSource;
    animgraphlib_CAnimParamHandle m_paramIndex;
    bool m_bLockWhenWaning;
    char end_pad_100[0x5];
};
