#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animgraphlib_SolveIKChainPoseOpFixedSettings_t.hpp"

class animgraphlib_CSolveIKChainUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable20[0x8];
    animgraphlib_CAnimUpdateNodeRef m_pChildNode;
    char m_targetHandles[0x18];
    animgraphlib_SolveIKChainPoseOpFixedSettings_t m_opFixedData;
    char end_pad_288[0x8];
};
