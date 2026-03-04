#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimComponentID.hpp"
#include "modellib_AnimScriptHandle.hpp"

class animgraphlib_CAnimScriptComponentUpdater {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    CUtlString m_name;
    modellib_AnimComponentID m_id;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    bool m_bStartEnabled;
    char end_pad_11[0x7];
    modellib_AnimScriptHandle m_hScript;
    char end_pad_47[0x4];
};
