#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animationsystem_HSequence.hpp"
#include "animgraphlib_CAnimInputDamping.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CDirectionalBlendUpdateNode {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char __vftable_pad[4];
    animationsystem_HSequence m_hSequences[8];
    animgraphlib_CAnimInputDamping m_damping;
    animgraphlib_AnimValueSource m_blendValueSource;
    animgraphlib_CAnimParamHandle m_paramIndex;
    char pad_110[0x2];
    float32 m_playbackSpeed;
    float32 m_duration;
    bool m_bLoop;
    bool m_bLockBlendOnReset;
    char end_pad_111[0x6];
};
