#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"
#include "animgraphlib_CPoseHandle.hpp"
#include "animationsystem_HSequence.hpp"

class animgraphlib_CSingleFrameUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char m_actions[0x18];
    animgraphlib_CPoseHandle m_hPoseCacheHandle;
    animationsystem_HSequence m_hSequence;
    float32 m_flCycle;
    char end_pad_215[0x4];
};
