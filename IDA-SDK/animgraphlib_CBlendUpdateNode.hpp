#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"
#include "animgraphlib_CAnimInputDamping.hpp"

class animgraphlib_CBlendUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable76[0x8];
    char m_children[0x18];
    char m_sortedOrder[0x18];
    char m_targetValues[0x18];
    char pad_77[0x4];
    animgraphlib_AnimValueSource m_blendValueSource;
    animgraphlib_LinearRootMotionBlendMode_t m_eLinearRootMotionBlendMode;
    animgraphlib_CAnimParamHandle m_paramIndex;
    char pad_78[0x2];
    animgraphlib_CAnimInputDamping m_damping;
    animgraphlib_BlendKeyType m_blendKeyType;
    bool m_bLockBlendOnReset;
    bool m_bSyncCycles;
    bool m_bLoop;
    bool m_bLockWhenWaning;
    bool m_bIsAngle;
    char end_pad_79[0x7];
};
