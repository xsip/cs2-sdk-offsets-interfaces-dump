#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimTagID.hpp"

class animgraphlib_CRagdollAnimTag {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    CGlobalSymbol m_name;
    CUtlString m_sComment;
    CGlobalSymbol m_group;
    modellib_AnimTagID m_tagID;
    char pad_54[0x14];
    bool m_bIsReferenced;
    char end_pad_55[0x7];
    void **__vftable_3;
    CGlobalSymbol m_profileName;
};
