import { CardActions, IconButton, Slide, Tooltip } from '@mui/material';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import React, { useState } from 'react';
import { CardActionPropsType } from '../../../../types/taskCardTypes';
import { NappConfirmModal } from '../../../UI/Modals/NappConfirmModal';
import { NappCommentsModal } from '../../../UI/Modals/NappCommentsModal';

export const CardAction: React.FC<CardActionPropsType> = ({ showActions, checked, taskId }) => {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showCommentsModal, setShowCommentsModal] = useState<boolean>(false);

  const handleDeleteModal = () => {
    console.log(taskId);
    setShowDeleteModal(false);
  };

  return (
    <>
      <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
        <CardActions
          sx={{
            display: showActions ? 'flex' : 'none',
            padding: '3px 16px',
          }}
        >
          <Tooltip title="Open Detail">
            <IconButton
              sx={{
                padding: '5px',
              }}
            >
              <InfoOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              onClick={() => setShowDeleteModal(true)}
              sx={{
                padding: '5px',
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          {/* TODO onClick */}
          <Tooltip title="Comments">
            <IconButton
              onClick={() => setShowCommentsModal(true)}
              sx={{
                padding: '5px',
              }}
            >
              <CommentOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          {/* TODO onClick */}
          <Tooltip title="Check">
            <IconButton
              sx={{
                padding: '5px',
              }}
            >
              <CheckOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Slide>
      {showDeleteModal && (
        <NappConfirmModal
          open={showDeleteModal}
          handleConfirm={handleDeleteModal}
          handleClose={() => setShowDeleteModal(false)}
          title="Delete Task"
          text="Are you sure that you want to remove this task?"
        />
      )}
      {showCommentsModal && (
        <NappCommentsModal open={showCommentsModal} handleClose={() => setShowCommentsModal(false)} />
      )}
    </>
  );
};
