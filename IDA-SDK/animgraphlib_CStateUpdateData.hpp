#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimScriptHandle.hpp"
#include "modellib_AnimStateID.hpp"

class animgraphlib_CStateUpdateData {
    CUtlString m_name;
    modellib_AnimScriptHandle m_hScript;
    char pad_229[0x4];
    char m_transitionIndices[0x18];
    char m_actions[0x18];
    modellib_AnimStateID m_stateID;
    char end_pad_230[0x4];
};
