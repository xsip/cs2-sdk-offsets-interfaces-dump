#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimComponentID.hpp"

class animgraphlib_CLODComponentUpdater {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    CUtlString m_name;
    modellib_AnimComponentID m_id;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    bool m_bStartEnabled;
    char end_pad_11[0x7];
    int32_t m_nServerLOD;
    char end_pad_164[0x4];
};
