#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_FollowTargetOpFixedSettings_t.hpp"
#include "animgraphlib_CAnimParamHandle.hpp"

class animgraphlib_CFollowTargetUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable20[0x8];
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    animgraphlib_FollowTargetOpFixedSettings_t m_opFixedData;
    char pad_128[0x8];
    animgraphlib_CAnimParamHandle m_hParameterPosition;
    animgraphlib_CAnimParamHandle m_hParameterOrientation;
    char end_pad_129[0x4];
};
