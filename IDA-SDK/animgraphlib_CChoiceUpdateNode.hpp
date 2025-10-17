#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimNodePath.hpp"

class animgraphlib_CChoiceUpdateNode {
    char vTable16[0x18];
    animgraphlib_CAnimNodePath m_nodePath;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    char pad_17[0x4];
    CUtlString m_name;
    char vTable93[0x8];
    char m_children[0x18];
    char m_weights[0x18];
    char m_blendTimes[0x18];
    animgraphlib_ChoiceMethod m_choiceMethod;
    animgraphlib_ChoiceChangeMethod m_choiceChangeMethod;
    animgraphlib_ChoiceBlendMethod m_blendMethod;
    float32 m_blendTime;
    bool m_bCrossFade;
    bool m_bResetChosen;
    bool m_bDontResetSameSelection;
    char end_pad_94[0x5];
};
