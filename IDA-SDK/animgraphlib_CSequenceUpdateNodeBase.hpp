#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"

class animgraphlib_CSequenceUpdateNodeBase {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable161[0x14];
    float32 m_playbackSpeed;
    bool m_bLoop;
    char end_pad_162[0x7];
};
