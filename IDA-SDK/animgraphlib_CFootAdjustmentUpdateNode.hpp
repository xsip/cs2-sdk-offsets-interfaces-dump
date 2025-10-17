#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_CPoseHandle.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CFootAdjustmentUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable20[0x8];
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    char vTable132[0x8];
    char m_clips[0x18];
    animgraphlib_CPoseHandle m_hBasePoseCacheHandle;
    animgraphlib_CAnimParamHandle m_facingTarget;
    char pad_133[0x2];
    float32 m_flTurnTimeMin;
    float32 m_flTurnTimeMax;
    float32 m_flStepHeightMax;
    float32 m_flStepHeightMaxAngle;
    bool m_bResetChild;
    bool m_bAnimationDriven;
    char end_pad_134[0x6];
};
