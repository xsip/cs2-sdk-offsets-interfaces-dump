#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimTagID.hpp"

class animgraphlib_CClothSettingsAnimTag {
    char vTable53[0x18];
    CGlobalSymbol m_name;
    CUtlString m_sComment;
    CGlobalSymbol m_group;
    modellib_AnimTagID m_tagID;
    char pad_54[0x14];
    bool m_bIsReferenced;
    char end_pad_55[0x7];
    char vTable96[0x8];
    float32 m_flStiffness;
    float32 m_flEaseIn;
    float32 m_flEaseOut;
    char pad_97[0x4];
    CUtlString m_nVertexSet;
};
