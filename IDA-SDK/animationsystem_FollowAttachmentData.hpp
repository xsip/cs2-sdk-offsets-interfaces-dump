#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AttachmentHandle_t.hpp"

class animationsystem_FollowAttachmentData {
    int32_t m_boneIndex;
    modellib_AttachmentHandle_t m_attachmentHandle;
    char end_pad_453[0x3];
};
